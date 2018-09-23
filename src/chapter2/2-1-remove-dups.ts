export class Node {
  next?: Node;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

export const removeDupes = (node: Node) => {
  const set = new Set<number>();
  let prevNode: Node | undefined;

  while (node.next) {
    if (set.has(node.data)) {
      prevNode!.next = node.next;
    } else {
      set.add(node.data);
      prevNode = node;
    }
    node = node.next;
  }
};

export const removeDupesLookAhead = (node: Node) => {
  let current: Node | undefined = node;

  while (current) {
    let runner: Node | undefined = current.next;

    while (runner) {
      if (current.data === runner.data) {
        current.next = runner.next;
      }
      runner = runner.next;
    }
    current = current.next;
  }
}
