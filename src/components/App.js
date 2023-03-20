import { render, screen } from '@testing-library/react';
import React from react;

describe('RelativeList', () => {
  let relatives;

  beforeEach(() => {
    relatives = [
      { id: "relativeListItem1", name: "John" },
      { id: "relativeListItem2", name: "Jane" },
      { id: "relativeListItem3", name: "Bob" },
      { id: "relativeListItem4", name: "Alice" }
    ];
    
    render(<RelativeList relatives={relatives} />);
  });

  it('should check length of ordered list of relatives', () => {
    const relativeList = screen.getByRole('list', { name: /relatives/i });
    expect(relativeList.children.length).toEqual(relatives.length);
  });
});

function App({ relatives }) {
  return (
    <ol key="relativeList" aria-label="Relatives">
      {relatives.map(relative => (
        <li key={relative.id}>{relative.name}</li>
      ))}
    </ol>
  );
}

export default App;
