import Student from './props/Student';

function App() {
  return (
    <>
        <Student name='Alice' age={20} isStudent={true} />
        <Student name='Bob' age={21} isStudent={false} />
        <Student name='Charlie' age={22} isStudent={true} />
        <Student name='David'/>
        <Student/>
    </>
  );
}

export default App
