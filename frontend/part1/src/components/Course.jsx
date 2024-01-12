const Course = (props) => {
    const {courses} = props
    return (
    <div>
        <Header />
        <Content courses={courses} />
        <Total courses={courses} />
       
    </div>
    )
}


const Header = () => {
    const name = "Web development curriculum"
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}



const Content = (props) => {
  const {courses} = props
  return (
    <div>
        {courses.map((course) => {
            return (
                <div key={course.id}>
                    <h2>{course.name}</h2>

                    {course.parts.map((part) =>{
                        return(
                            <div key={part.id}>
                                <ul>
                                    <li>{part.name}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

const Total = (props) => {
  const {courses} = props
  const total = courses.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p>total exercises {total}</p>
    </div>
  )
}

export default Course