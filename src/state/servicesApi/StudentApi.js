


// Attendance Rotes

//list all students Attendance Date-wise

const fetchAllStudentsAttendance = async () => {
    const response = await fetch("http://localhost:8000/api/zn/attendance/listallstudentsattendance", {
        method: 'GET',
        headers: {
            // 'authorization': `Bearer ${token}`
        }
    });
    const json = await response.json()
    return json
}

export { fetchAllStudentsAttendance }