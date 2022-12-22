interface ToSian {
  sender: string;
  message: string;
  createdAt: Date;
}

export function createMockMessage(): ToSian {
  return {
    sender: "홍길동",
    message: "안녕",
    createdAt: new Date(),
  };
}
