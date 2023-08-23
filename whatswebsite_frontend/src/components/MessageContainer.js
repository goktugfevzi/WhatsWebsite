import { useEffect, useRef, useState } from 'react';

const MessageContainer = ({ messages }) => {
    const messageRef = useRef();
    const [activeUser, setActiveUser] = useState(sessionStorage.getItem("activeUser") || "");

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div ref={messageRef} className='message-container'>
            {messages.map((m, index) => (
                <div key={index} className={activeUser === m.user ? 'user-message' : 'other-user-message'}>
                    <div className={`message ${activeUser === m.user ? 'bg-primary' : 'bg-info'}`} style={{ padding: 10 }}>
                        {m.message}
                    </div>
                    <div className='from-user'>{m.user}</div>
                </div>
            ))}
        </div>
    );
}

export default MessageContainer;
