import React from 'react';
import ReactFlow from 'react-flow-renderer';

const ActorA = [
  {
    id: 'A1',
    type: 'input', // input node
    data: { label: 'Start' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: 'A2',
    // you can also pass a React component as a label
    data: { label: <div>Step To Take</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: 'A3',
    type: 'output', // output node
    data: { label: 'Goal' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'ea1-2', source: 'A1', target: 'A2', animated: true },
  { id: 'ea2-3', source: 'A2', target: 'A3' },
];

const ActorB = [
  {
    id: 'B1',
    type: 'input', // input node
    data: { label: 'Start' },
    position: { x: 25, y: 25 },
  },
  // default node
  {
    id: 'B2',
    // you can also pass a React component as a label
    data: { label: <div>Step To Take</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: 'B3',
    type: 'output', // output node
    data: { label: 'Goal' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'eb1-2', source: 'B1', target: 'B2', animated: true },
  { id: 'eb2-3', source: 'B2', target: 'B3' },
];

const App = () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={ActorA} />
    <ReactFlow elements={ActorB} />
  </div>
);

export default App
