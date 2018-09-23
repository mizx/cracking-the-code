import { Node, removeDupesLookAhead as removeDupes } from '../2-1-remove-dups';

const generateTestNodes = (data: number[]): Node => {
  let rootNode = new Node(data[0]);
  let prevNode: Node = rootNode;

  for (let i = 1; i < data.length; i++) {
    const node = new Node(data[i]);
    prevNode.next = node;
    prevNode = node;
  }

  return rootNode;
}

describe('Chapter 2: Remove Dups', () => {
  it('should remove duplicate node', () => {
    const linkedList = generateTestNodes([1, 2, 3, 3, 4]);
    removeDupes(linkedList);

    expect(linkedList.data).toBe(1);
    expect(linkedList.next.data).toBe(2);
    expect(linkedList.next.next.data).toBe(3);
    expect(linkedList.next.next.next.data).toBe(4);
    expect(linkedList.next.next.next.next).toBe(undefined);
  });

  it('should remove duplicate node when first two nodes are duplicates', () => {
    const linkedList = generateTestNodes([1, 1, 2, 3]);
    removeDupes(linkedList);

    expect(linkedList.data).toBe(1);
    expect(linkedList.next.data).toBe(2);
    expect(linkedList.next.next.data).toBe(3);
    expect(linkedList.next.next.next).toBe(undefined);
  });

  it('should remove duplicate nodes when last elements are duplicates', () => {
    const linkedList = generateTestNodes([1, 2, 2, 2]);
    removeDupes(linkedList);

    expect(linkedList.data).toBe(1);
    expect(linkedList.next.data).toBe(2);
    expect(linkedList.next.next).toBe(undefined);
  });
});
