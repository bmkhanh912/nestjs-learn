import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    /** Cho phép mọi origin, bạn có thể giới hạn domain nếu muốn */
    origin: '*',
  },
})
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  /**
   * Emit data về client
   * @param roomId: id phòng (VD: page_id) mà client join vào
   * @param data: dữ liệu muốn gửi
   */
  emitSessionUpdate(roomId: string, data: any) {
    /**
     * Gửi dữ liệu đến tất cả client đang join vào roomId
     */
    this.server.to(roomId).emit('SESSION_UPDATE', data);
  }

  /**
   * Lắng nghe sự kiện client gửi lên (ví dụ join room)
   */
  @SubscribeMessage('JOIN_ROOM')
  handleJoinRoom(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: Socket,
  ) {
    /** Kiểm tra xem client đã join room này chưa */
    client.join(roomId);
    /** Gửi thông báo cho client đã join thành công */
    client.emit('JOINED_ROOM', `Bạn đã join room ${roomId}`);
  }
}
