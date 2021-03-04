using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace Chat_Test.Hubs
{

    /// <summary>
    /// implement your hub logic here
    /// </summary>
    public class ChatHub:Hub    {

        public static int UserNum;
        public void SendUserList(int UserNum)
        {
            Clients.All.SendAsync("BroadcastMessage", UserNum.ToString());
        }
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
        public override Task OnConnectedAsync()
        {
            UserNum = UserNum + 1;
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            UserNum = UserNum - 1;
            return base.OnDisconnectedAsync(exception);
        }
    }
}
