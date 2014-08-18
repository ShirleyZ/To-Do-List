// Javascript test file for To Do List website

// Testing stuff
newList("Uni Stuff");
printList(0);
newTask("Readings", "Tomorrow", 0);
printList(0);
newTask("Lecture recording", "Tomorrow", 0);
newTask("2000 animation", "Tomorrow", 0);
newTask("3091 readings", "Tomorrow", 0);
newTask("2414 video pitch", "Tomorrow", 0);
printList(0);
checkTask(0, 3);
checkTask(0, 0);
checkTask(0, 1);
printList(0);
uncheckTask(0, 3);
printList(0);