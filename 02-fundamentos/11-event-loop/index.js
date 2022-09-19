function a() {
  console.log("Executing a()");
}

function b() {
  console.log("Executing b()");
}

function c() {
  console.log("Executing c()");
  a();
  b();
}

c();
