import { Outlet, Route, Routes } from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import { BookingsList } from "./bookings/BookingsList"
import { ClassList } from "./Classes/ClassList"

import { AvailabilityCalendar } from "./availability/AvailabilityCalendar"
import { SessionDetails } from "./sessions/SessionDetails"
import { ClassPhotos } from "./photos/ClassPhotos"
import { ClassDetails } from "./classes/ClassDetails"
import { AuthorizedRoute } from "../auth/AuthorizedRoute"
import { Register } from "../auth/Register"
import { useContext } from "react"
import { UserContext } from "../../App"


export const EmployeeRoutes = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)
    return (
        <Routes>
            <Route
                path="/"
                element= {
                    <>
                    <EmployeeNavBar/>
                    <Outlet/>
                    
                    </>
                }
                >
                    {/* Employee Routes here */}
                    <Route index element={<BookingsList/>} />
                    <Route path="classes">
                        <Route index element={<ClassList/>}/>
                        <Route path=":classId">
                            <Route index element={<ClassDetails/>}/>
                            <Route path="availability" element={<AvailabilityCalendar/>}/>
                            <Route path="photos" element={<ClassPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path="session/:sessionId" element={<SessionDetails/>}/>
                    <Route
                        path="register"
                        element={
                            <AuthorizedRoute roles={"Admin"} loggedInUser={loggedInUser}>

                            <Register setLoggedInUser={setLoggedInUser} />
                            </AuthorizedRoute>
                        }
                        />
                

            </Route>
        </Routes>
    )
}