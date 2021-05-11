import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  children = "vá para página home"
  href = "/"
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div>
      <p>teste</p>
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    </div>
  )
}

export default ActiveLink