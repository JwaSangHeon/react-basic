// import React from 'react';
// import { useRef, useState, useCallback } from 'react';
// import produce from 'immer';

// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({
//     name: '',
//     username: '',
//   });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null,
//   });

//   //input 수정을 위한 함수
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm(
//       produce((draft) => {
//         draft[name] = value;
//       }),
//     );
//   }, []);

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const info = {
//         id: nextId.current,
//         name: form.name,
//         username: form.username,
//       };

//       //array에 새 항목 등록
//       setData(
//         // {
//         //   ...data,
//         //   array: data.array.concat(info),
//         // }
//         produce((draft) => {
//           draft.array.push(info);
//         }),
//       );

//       //form 초기화
//       setForm({
//         name: '',
//         username: '',
//       });
//       nextId.current += 1;
//     },
//     [form.name, form.username],
//   );

//   const onRemove = useCallback((id) => {
//     setData(
//       // { ...data, array: data.array.filter((info) => info.id !== id) }
//       produce((draft) => {
//         draft.array.splice(
//           draft.array.findIndex((info) => info.id === id),
//           1,
//         );
//       }),
//     );
//   }, []);
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username}({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './9-day-react-router/pages/About';
import Articles from './9-day-react-router/pages/Articles';
import Home from './9-day-react-router/pages/Home';
import Profile from './9-day-react-router/pages/Profile';
import Article from './9-day-react-router/pages/Article';
import Layout from './9-day-react-router/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
