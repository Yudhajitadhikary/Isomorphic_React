let count = 0;
export default {
  __setCount(_count) {
    count = _count;
  },
  async getNotifications() {
    console.warn("FAKE SERVICE IEKS");
    return { count };
  }
}
