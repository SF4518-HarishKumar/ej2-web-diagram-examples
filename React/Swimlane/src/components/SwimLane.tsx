import * as React from "react";
import {
  DiagramComponent,
  SymbolPaletteComponent,
  PortConstraints,
  SelectorConstraints,
  PortVisibility,
  Inject,
  UndoRedo,
  NodeModel,
  ConnectorModel,
  PaletteModel,
} from "@syncfusion/ej2-react-diagrams";

const SAMPLE_CSS = `
.diagram-Swimlane .sb-mobile-palette {
  width: 195px;
  height: 850px;
  float: left;
}

.diagram-Swimlane #palette-space {
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.sb-mobile-palette-bar {
  display: none;
}

.sb-mobile-diagram {
  width: calc(100% - 200px);
  float: right;
}

@media (max-width: 550px) {
  .sb-mobile-palette-bar {
    display: block;
    background: #f5f5f5;
    padding: 5px;
  }
  
  .sb-mobile-palette {
    position: fixed;
    left: -195px;
    transition: left 0.3s ease;
    z-index: 1000;
    background: white;
  }
  
  .sb-mobile-palette-open {
    left: 0 !important;
  }
  
  .sb-mobile-diagram {
    width: 100%;
    float: none;
  }
}

#palette-icon {
  cursor: pointer;
  padding: 10px;
  float: right;
}

.e-ddb-icons1.e-toggle-palette::before {
  content: '☰';
  font-size: 20px;
}
`;

// Path data for custom shape (node3)
const pathData = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
  ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
  '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';

// Port configuration
const port = [
  { id: 'Port1', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default | PortConstraints.Draw },
  { id: 'Port2', offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default | PortConstraints.Draw },
  { id: 'Port3', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default | PortConstraints.Draw },
  { id: 'Port4', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default | PortConstraints.Draw }
];

// Nodes array
const nodes: NodeModel[] = [
  {
    id: 'swimlane',
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      header: {
        annotation: { content: 'SALES PROCESS FLOW CHART', style: { fill: 'transparent' } },
        height: 50,
        style: { fontSize: 11 }
      },
      lanes: [
        {
          id: 'stackCanvas1',
          header: { annotation: { content: 'Consumer' }, width: 50, style: { fontSize: 11 } },
          height: 100,
          children: [
            { id: 'node1', annotations: [{ content: 'Consumer learns \n of product', style: { fontSize: 11 } }], margin: { left: 60, top: 30 }, height: 40, width: 100, ports: port },
            { id: 'node2', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Does \n Consumer want \nthe product', style: { fontSize: 11 } }], margin: { left: 200, top: 20 }, height: 60, width: 120, ports: port },
            { id: 'node3', annotations: [{ content: 'No sales lead', style: { fontSize: 11 } }], margin: { left: 370, top: 30 }, shape: { type: 'Path', data: pathData }, height: 40, width: 100, ports: port },
            { id: 'node4', annotations: [{ content: 'Sell to consumer', style: { fontSize: 11 } }], margin: { left: 510, top: 30 }, height: 40, width: 100, ports: port }
          ]
        },
        {
          id: 'stackCanvas2',
          header: { annotation: { content: 'Marketing' }, width: 50, style: { fontSize: 11 } },
          height: 100,
          children: [
            { id: 'node5', annotations: [{ content: 'Create marketing campaigns' }], margin: { left: 60, top: 20 }, height: 40, width: 100, ports: port },
            { id: 'node6', annotations: [{ content: 'Marketing finds sales leads' }], margin: { left: 210, top: 20 }, height: 40, width: 100, ports: port }
          ]
        },
        {
          id: 'stackCanvas3',
          header: { annotation: { content: 'Sales' }, width: 50, style: { fontSize: 11 } },
          height: 100,
          children: [
            { id: 'node7', annotations: [{ content: 'Sales receives lead' }], margin: { left: 210, top: 30 }, height: 40, width: 100, ports: port }
          ]
        },
        {
          id: 'stackCanvas4',
          header: { annotation: { content: 'Success' }, width: 50, style: { fontSize: 11 } },
          height: 100,
          children: [
            { id: 'node8', annotations: [{ content: 'Success helps \n retain consumer \n as a customer' }], margin: { left: 510, top: 20 }, height: 50, width: 100, ports: port }
          ]
        }
      ],
      phases: [
        { id: 'phase1', offset: 170, header: { annotation: { content: 'Phase' } } }
      ],
      phaseSize: 20
    },
    offsetX: 360,
    offsetY: 320,
    height: 100,
    width: 650
  }
];

// Connectors array
const connectors: ConnectorModel[] = [
  { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
  { id: 'connector2', sourceID: 'node2', targetID: 'node3', annotations: [{ content: 'No', style: { fill: 'white' } }] },
  { id: 'connector3', sourceID: 'node4', targetID: 'node8' },
  { id: 'connector4', sourceID: 'node2', targetID: 'node6', annotations: [{ content: 'Yes', style: { fill: 'white' } }] },
  { id: 'connector5', sourceID: 'node5', targetID: 'node1' },
  { id: 'connector6', sourceID: 'node6', targetID: 'node7' },
  { id: 'connector7', sourcePortID: 'Port1', targetPortID: 'Port3', sourceID: 'node4', targetID: 'node7' }
];

// Palette symbols configuration
const palettes: PaletteModel[] = [
  {
    id: 'flow',
    expanded: true,
    title: 'Flow Shapes',
    symbols: [
      { id: 'Terminator', addInfo: { tooltip: 'Terminator' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Terminator' }, ports: port },
      { id: 'Process', addInfo: { tooltip: 'Process' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Process' }, ports: port },
      { id: 'Decision', addInfo: { tooltip: 'Decision' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Decision' }, ports: port },
      { id: 'Document', addInfo: { tooltip: 'Document' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Document' }, ports: port },
      { id: 'PreDefinedProcess', addInfo: { tooltip: 'Predefined process' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'PreDefinedProcess' }, ports: port },
      { id: 'data', width: 50, height: 50, addInfo: { tooltip: 'Data' }, shape: { type: 'Flow', shape: 'Data' }, ports: port }
    ]
  },
  {
    id: 'swimlaneShapes',
    expanded: true,
    title: 'Swimlane Shapes',
    symbols: [
      {
        id: 'Horizontalswimlane',
        addInfo: { tooltip: 'Horizontal swimlane' },
        shape: {
          type: 'SwimLane',
          lanes: [{ id: 'lane1', height: 60, width: 150, header: { width: 50, height: 50, style: { fontSize: 11 } } }],
          orientation: 'Horizontal',
          isLane: true
        },
        height: 60,
        width: 140,
        offsetX: 70,
        offsetY: 30
      },
      {
        id: 'Verticalswimlane',
        addInfo: { tooltip: 'Vertical swimlane' },
        shape: {
          type: 'SwimLane',
          lanes: [{ id: 'lane1', height: 150, width: 60, header: { width: 50, height: 50, style: { fontSize: 11 } } }],
          orientation: 'Vertical',
          isLane: true
        },
        height: 140,
        width: 60,
        offsetX: 70,
        offsetY: 30
      },
      {
        id: 'verticalPhase',
        addInfo: { tooltip: 'Vertical phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' } }],
          annotations: [{ text: '' }],
          orientation: 'Vertical',
          isPhase: true
        },
        height: 60,
        width: 140
      },
      {
        id: 'horizontalPhase',
        addInfo: { tooltip: 'Horizontal phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' } }],
          annotations: [{ text: '' }],
          orientation: 'Horizontal',
          isPhase: true
        },
        height: 60,
        width: 140
      }
    ]
  },
  {
    id: 'connectors',
    expanded: true,
    title: 'Connectors',
    symbols: [
      { id: 'orthogonal', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 } },
      { id: 'Orthogonaldashed', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, style: { strokeDashArray: '4 4' } },
      { id: 'straight', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 } },
      { id: 'straightdashed', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }, style: { strokeDashArray: '4 4' } }
    ]
  }
];



const SwimLane: React.FC = () => {
  const paletteIconInstance = React.useRef<HTMLDivElement>(null);
  const paletteSpaceInstance = React.useRef<HTMLDivElement>(null);
  let diagramInstance: DiagramComponent | null = null;

  React.useEffect(() => {
    addEvents();
    if (diagramInstance) {
      diagramInstance.fitToPage();
    }
  }, []);

  const addEvents = () => {
    const isMobile = window.matchMedia('(max-width: 550px)').matches;
    if (isMobile && paletteIconInstance.current) {
      paletteIconInstance.current.addEventListener('click', openPalette);
    }
  };

  const openPalette = () => {
    if (paletteSpaceInstance.current) {
      paletteSpaceInstance.current.classList.toggle('sb-mobile-palette-open');
    }
  };

  const getConnectorDefaults = (connector: ConnectorModel): ConnectorModel => {
    if (connector.id && connector.id.indexOf('straight') !== -1) {
      connector.type = 'Straight';
    } else {
      connector.type = 'Orthogonal';
    }
    setConnectorStyles(connector, '#717171');
    return connector;
  };

  const setConnectorStyles = (connector: ConnectorModel, color: string) => {
    connector.style = { strokeWidth: 1, strokeColor: color };
    connector.targetDecorator = { style: { fill: color, strokeColor: color } };
  };

  const getNodeDefaults = (node: NodeModel): NodeModel => {
    node.style = { strokeColor: '#717171' };
    return node;
  };


  return (
    <div className="control-pane diagram-Swimlane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <div style={{ width: "100%" }}>
          {/* Mobile palette toggle bar */}
          <div className="sb-mobile-palette-bar">
            <div 
              id="palette-icon" 
              ref={paletteIconInstance} 
              className="e-ddb-icons1 e-toggle-palette"
            ></div>
          </div>
          {/* Symbol palette */}
          <div id="palette-space" ref={paletteSpaceInstance} className="sb-mobile-palette">
            <SymbolPaletteComponent
              id="symbolpalette"
              expandMode="Multiple"
              palettes={palettes}
              getNodeDefaults={getNodeDefaults}
              getConnectorDefaults={getConnectorDefaults}
              width="100%"
              height="850px"
              symbolHeight={48}
              symbolWidth={48}
              symbolMargin={{ left: 8, right: 8, top: 8, bottom: 8 }}
              getSymbolInfo={(symbol: NodeModel) => ({
                tooltip: (symbol.addInfo as any)?.tooltip || symbol.id
              })}
            />
          </div>
          {/* Diagram */}
          <div id="diagram-space" className="sb-mobile-diagram">
            <DiagramComponent
              id="diagram"
              ref={(diagram) => (diagramInstance = diagram)}
              width="100%"
              height="850px"
              nodes={nodes}
              connectors={connectors}
              getNodeDefaults={getNodeDefaults}
              getConnectorDefaults={getConnectorDefaults}
              selectedItems={{ 
                constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate 
              }}
            >
              <Inject services={[UndoRedo,]} />
            </DiagramComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimLane;
