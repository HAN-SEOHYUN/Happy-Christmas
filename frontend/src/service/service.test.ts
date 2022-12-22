import {
  getMessageById,
  getCountByName,
  postToSian,
  checkPwd,
} from "./service";

describe("Service \\", () => {
  describe("getMessageById", () => {
    //getMessageById
    it("should return a message with the ID", async () => {
      const message = await getMessageById(2);
      expect(message).toEqual({
        recipient: "홍길동",
        message: "안녕",
        id: 2,
        createdAt: "2022-12-15T09:28:29.000Z",
      });
    });
  });

  describe("getCountByName", () => {
    it("should return a count with the name", async () => {
      const count = await getCountByName("홍길동");
      expect(count).toEqual({ count: 1 });
    });
  });

  // describe('postToSian',()=>{
  //   test('postToSian sends the correct data', async () => {
  //     const sender = '홍길동';
  //     const message = 'Hello';
  //     postToSian(sender, message);

  //     expect(mockAxios.post).toHaveBeenCalledWith('http://localhost:4000/api/to/',
  //       {
  //         sender: sender,
  //         message: message,
  //       },
  //       expect.anything()
  //     );
  //   });

  //   test('postToSian handles errors correctly', async () => {
  //     mockAxios.post.mockRejectedValueOnce(new Error());
  //     await expect(postToSian('홍길동', 'Hello')).rejects.toThrow();
  //   });
  // })
});
