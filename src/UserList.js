const User = ({user, onRemove, onToggle }) => {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
      <button onToggle={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

const UserList = ({users, onRemove, onToggle}) =>{
  return(
    <>
    {users.map(user => 
      <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
    )}
    </>
  )
};


export default UserList;