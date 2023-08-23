import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';

const Chat = ({ sendMessage, messages, users, closeConnection }) => 
<div className='container'>
    <div className='leave-room'>
      
    </div>
    <ConnectedUsers users={users} closeConnection={closeConnection} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>

export default Chat;