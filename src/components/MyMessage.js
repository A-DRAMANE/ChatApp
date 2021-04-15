const MyMessage = ({message}) => {
    if(message?.attachment?.length>0){
        return(
            <img
                src={message.attachment[0].fille}
                alt="message attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float:'right', marginRight:"18px",color:"white",backgroundColor:"#3B2A50"}}>
            {message.texte}
        </div>
    )
}

export default MyMessage