import React, { useState } from 'react';

function ConditionalRender() {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown((isShown) => !isShown);

  return (
    <div className='container'>
      <button onClick={toggle}>Toggle Display</button>
      {/*
        the <h1> content is displayeed if 'isShown' is Truthy
         otherwise the <h1> is ignorred and therefore not displayed
      */}
      {isShown && <h1>Content Displayed Here</h1>}
    </div>
  );
}

type User = {name: string} | null;

function ConditionalRender2() {
  const [user, setUser] = useState<User>(null);
  const load = () => setUser({name: 'Jane'});
  const clear = () => setUser(null);

  return (
    <div className='container'>
      <button onClick={load}>Load User</button>
      <button onClick={clear}>Clear User</button>
      {/*
        the <h1> content is displayeed if 'user' is Truthy
         (contains an Object in this case) otherwise the <h1> is ignorred and therefore not displayed since 'user' is Null and Null is Falsy
      */}
      {user && <h1>Name: {user.name}</h1>}
    </div>
  );
}


export { ConditionalRender, ConditionalRender2 };
