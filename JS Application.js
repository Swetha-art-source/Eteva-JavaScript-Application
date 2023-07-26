function findUniqueUsers(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);

  // Get a unique set of users from List1 which are not in List2
  const uniqueUsersList1 = new Set([...set1].filter(user => !set2.has(user)));

  // Get a unique set of users from List2 which are not in List1
  const uniqueUsersList2 = new Set([...set2].filter(user => !set1.has(user)));

  // Get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
  const commonUsers = new Set([...set1].filter(user => set2.has(user)));

  return {
    uniqueUsersList1: Array.from(uniqueUsersList1),
    uniqueUsersList2: Array.from(uniqueUsersList2),
    commonUsers: Array.from(commonUsers),
  };
}

// Input lists
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const result = findUniqueUsers(List1, List2);
console.log("Unique users in List1 and not in List2:", result.uniqueUsersList1);
console.log("Unique users in List2 and not in List1:", result.uniqueUsersList2);
console.log("Common users in both lists:", result.commonUsers);