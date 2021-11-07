if (require.main === module) {
  try {
    console.log('Hi');
  } catch (err) {
    console.log('err: ', err);
  }
}