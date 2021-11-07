if (!module.parent) {
  try {
    console.log('Hi');
  } catch (err) {
    console.log('err: ', err);
  }
}