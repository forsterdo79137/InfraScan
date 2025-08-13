declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera } from 'three';
  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);
    update(): void;
    dispose(): void;
  }
}

declare module 'three/examples/jsm/loaders/MTLLoader' {
  export class MTLLoader {
    loadAsync(url: string): Promise<any>;
  }
}

declare module 'three/examples/jsm/loaders/OBJLoader' {
  export class OBJLoader {
    setMaterials(materialCreator: any): void;
    loadAsync(url: string): Promise<any>;
  }
}


