import React, { useRef, useEffect } from 'react';
import './App.css';
import { DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-react-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const App: React.FC = () => {
  const diagramInstance = useRef<DiagramComponent>(null);
  const connectors: ConnectorModel[] = [
    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
    { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
    { id: 'connector3', sourceID: 'node3', targetID: 'node1' },
  ];

  const nodes: NodeModel[] = [
    { id: 'node1', offsetX: 375, offsetY: 130, 
      height: 60, width: 150,
      annotations: [{ content: 'Node 1' }] 
    },
    { id: 'node2', offsetX: 675, offsetY: 130, 
      height: 60, width: 150, 
      annotations: [{ content: 'Node 2' }] 
    },
    { id: 'node3', offsetX: 525, offsetY: 270, 
      height: 60, width: 150, 
      annotations: [{ content: 'Node 3' }] 
    },
    { id: 'node4', offsetX: 525, offsetY: 370, 
      height: 60, width: 150, 
      annotations: [{ content: 'Node 4' }] 
    },
  ];
  const group =  {
    id : 'group1',
    children : [ 'node1', 'node2', 'connector1', 'connector2',
      'connector3', 'node3'
    ],
    padding : {top : 20, bottom : 20, left : 20, right : 20},
    style : { fill : 'Orange', strokeColor : 'Black', strokeWidth : 2},
    annotations: [{ content: 'Group 1'}]
  }
  const nestedGroup =  {
    id : 'nestedGroup1',
    children : [ 'group1', 'node4'],
    padding : {top : 20, bottom : 20, left : 20, right : 20},
    style : { fill : 'Blue', strokeColor : 'Black', strokeWidth : 2},
    annotations: [{ content: 'Nested Group'}]
  }

  useEffect(()=>{
    if(diagramInstance.current){
      diagramInstance.current.add(group);
      diagramInstance.current.add(nestedGroup);
    }
  })
  const addChildNodeToGroup = () =>{
    if(diagramInstance.current){
      diagramInstance.current.addChildToGroup(group, 'node3');
    }
  }
  const UnGroup = () =>{
    if(diagramInstance.current){
      diagramInstance.current.unGroup();
    }
  }

  const updateGroup = () =>{
    if(diagramInstance.current){
      diagramInstance.current.nodes[3].offsetX = 300;
      diagramInstance.current.nodes[3].offsetY = 300;
    }
  }
  return (
    <div>
      <div className='container'>
        <ButtonComponent cssClass='button' 
        onClick={addChildNodeToGroup}>Add Child Node to Group</ButtonComponent>
        <ButtonComponent cssClass='button' 
        onClick={UnGroup}>UnGroup</ButtonComponent>
        <ButtonComponent cssClass='button' 
        onClick={updateGroup}>Update Group</ButtonComponent>
      </div>
      <DiagramComponent
      ref={diagramInstance}
      width="100%" height="650px" 
      nodes={nodes} 
      connectors={connectors} />
    </div>
  );
};

export default App;
