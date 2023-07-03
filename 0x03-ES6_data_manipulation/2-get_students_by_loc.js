export default function getStudentsByLocation(myArray, location) {
  return myArray.filter((local) => local.location === location);
}
