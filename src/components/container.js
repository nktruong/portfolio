function Container( props ) {
  const children = props.children
  return (
    <div className="max-w-5xl pt-20 pb-48 mx-auto animate-fade-in-down font-dm">
      {/* <h1>{ props.message }</h1> */}
      { children }
    </div>
  )
}

export default Container

