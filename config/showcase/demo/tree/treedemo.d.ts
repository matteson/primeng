import { OnInit } from '@angular/core';
import { NodeService } from '../service/nodeservice';
import { Message, MenuItem, TreeNode } from '../../../components/common/api';
import { Tree } from '../../../components/tree/tree';
export declare class TreeDemo implements OnInit {
    private nodeService;
    msgs: Message[];
    expandingTree: Tree;
    filesTree1: TreeNode[];
    filesTree2: TreeNode[];
    filesTree3: TreeNode[];
    filesTree4: TreeNode[];
    filesTree5: TreeNode[];
    filesTree6: TreeNode[];
    filesTree7: TreeNode[];
    filesTree8: TreeNode[];
    lazyFiles: TreeNode[];
    selectedFile: TreeNode;
    selectedFile2: TreeNode;
    selectedFile3: TreeNode;
    selectedFiles: TreeNode[];
    selectedFiles2: TreeNode[];
    items: MenuItem[];
    constructor(nodeService: NodeService);
    ngOnInit(): void;
    nodeSelect(event: any): void;
    nodeUnselect(event: any): void;
    nodeExpandMessage(event: any): void;
    nodeExpand(event: any): void;
    viewFile(file: TreeNode): void;
    unselectFile(): void;
    expandAll(): void;
    collapseAll(): void;
    private expandRecursive(node, isExpand);
}
