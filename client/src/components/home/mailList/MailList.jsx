import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
    <h1 className='mailTitle'>The first to know, always</h1>
    <span className="mailTitle">Want to keep up with our best offers? Join now.</span>
    <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default MailList;