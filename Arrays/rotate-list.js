let print = this.print || console.log;

let list = "1,2,3,4,5,6".split(",");
const n = +"7";

if (n < list.length) {
  list = [...list.slice(n), ...list.slice(0, n)];
} else if (n > list.length) {
  n = n % list.length;
  list = [...list.slice(n), ...list.slice(0, n)];
}

print(list.join(","));