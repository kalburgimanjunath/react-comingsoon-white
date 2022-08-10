import React from 'react';
export default function About() {
  return (
    <div className="about">
      <h1>Coming soon</h1>
      <p>
        Lorem ipsum dolor sit amet magna, consectetur adipiscing elit. Sed nec
        lacinia ligula et morbi dolor rutrum neque dolor sagittis dui. Integer
        sed pulvinar lorem consequat.
      </p>
      <div>{/* social icons */}</div>
      <div style={{ flex: 1, paddingTop: 20 }}>
        <input
          type="text"
          placeholder="Email address"
          required
          style={{
            flexGrow: 1,
            flexShrink: 1,
            padding: 20,
            borderRadius: 10,
            border: '1px solid #d6d6d6',
          }}
        />
        <span className="button" style={{ marginLeft: 20 }}>
          <button type="submit">Get Notified</button>
        </span>
      </div>
    </div>
  );
}
