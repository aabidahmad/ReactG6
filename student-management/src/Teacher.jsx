function Teacher(teacherDetails){
    return (
        <>
        <h1>Teacher Component</h1>
        <p>Name: {teacherDetails.name}</p>
        <p>Subject:{teacherDetails.subject}</p>
        <p> Department :{teacherDetails.department}</p>
        </>
    )
}
export default Teacher;
