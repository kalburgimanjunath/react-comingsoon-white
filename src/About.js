import React from 'react';
export default function About() {
  return (
    <div className="about">
      <h1>Coming soon</h1>
      <div>
        Blandit massa enim nec dui nunc. Non pulvinar neque amet laoreet amet
        interdum et consequat.
      </div>
      <div>{/* social icons */}</div>
      <div style={{ flex: 1, paddingTop: 20 }}>
        <input
          type="text"
          placeholder="Email address"
          style={{ padding: 20, borderRadius: 10, border: '1px solid #d6d6d6' }}
        />
        <span className="button" style={{ marginLeft: 20 }}>
          <button type="submit">Get Notified</button>
        </span>
      </div>
    </div>
  );
}
