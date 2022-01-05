function Card( props ) {
  const children = props.children
  return (
    <div className="py-8 mx-auto bg-gray-50">
      {/* <h1>{ props.message }</h1> */}
      { children }
    </div>
  )
}

export default Card

