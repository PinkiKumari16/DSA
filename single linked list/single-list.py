class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(2)
sec = Node(7)
third = Node(8)

head.next = sec
sec.next = third
third.next = head
arr = head

