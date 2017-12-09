using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using WorldTeam.Models;

namespace WorldTeam.Assets
{
    public class SQLHelper
    {
        public UserData GetUser(string login, string password)
        {
            string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
            string sqlExpression = $"SELECT * FROM Users WHERE Login = '{login}' AND Password = '{password}';";
            SqlCommand comm = new SqlCommand(sqlExpression, conn);
            SqlDataReader reader = comm.ExecuteReader();

            while (reader.Read())
            {
                UserData user = new UserData();
                user.Name = (string)reader["name"];
                user.Surname = (string)reader["surname"];
                user.Id = (Guid)reader["id"];
                return user;
            }
            reader.Close();
            conn.Close();
            return new UserData();
        }

        public List<Games> GetAllGames(Guid UserId)
        {
            string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
            string sqlExpression = $"SELECT Id ,Game_name FROM Games;";
            SqlCommand comm = new SqlCommand(sqlExpression, conn);
            SqlDataReader reader = comm.ExecuteReader();

            List<Games> games = new List<Games>();
            List<Guid> activeGamesIds = new List<Guid>();

            while (reader.Read())
            {
                Games game = new Games();
                game.Id = (Guid)reader["Id"];
                game.Name = (string)reader["Game_name"];
                games.Add(game);
            }

            reader.Close();

            sqlExpression = $"SELECT * FROM User_games WHERE User_Id = '{UserId}' AND Active = 1;";
            comm = new SqlCommand(sqlExpression, conn);
            reader = comm.ExecuteReader();

            while (reader.Read())
            {
                activeGamesIds.Add((Guid)reader["Game_Id"]);
            }

            reader.Close();
            conn.Close();

            activeGamesIds.ForEach(x =>
            {
                games.ForEach(y =>
                {
                    if (y.Id == x)
                        y.Active = true;
                });
            });

            return games;
        }

        public void UpateGameStatus(Guid UserId, Guid GameId)
        {
            if (UserId == Guid.Empty)
                return;

            string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
            string sqlExpression = $"SELECT * FROM User_games WHERE User_Id = '{UserId}' AND Game_Id = '{GameId}'";
            SqlCommand comm = new SqlCommand(sqlExpression, conn);
            SqlCommand updateComm = new SqlCommand();
            var count = comm.ExecuteScalar();
            if (count == null)
            {
                sqlExpression = $"INSERT INTO User_games VALUES (NEWID(),'{UserId}','{GameId}', 1)";
                SqlCommand cmd = new SqlCommand(sqlExpression, conn);
                cmd.ExecuteNonQuery();
                return;
            }
            else
            {
                SqlCommand cmd = new SqlCommand(sqlExpression, conn);
                SqlDataReader reader = comm.ExecuteReader();
                while (reader.Read())
                {
                    bool active = reader.GetBoolean(reader.GetOrdinal("Active"));
                    if (active)
                    {
                        sqlExpression = $"UPDATE User_games SET Active = 0 WHERE User_Id = '{UserId}' AND Game_Id = '{GameId}';";
                        updateComm = new SqlCommand(sqlExpression, conn);
                    }
                    else
                    {
                        sqlExpression = $"UPDATE User_games SET Active = 1 WHERE User_Id = '{UserId}' AND Game_Id = '{GameId}';";
                        updateComm = new SqlCommand(sqlExpression, conn);
                    }
                }
                reader.Close();
            }
            updateComm.ExecuteNonQuery();
            conn.Close();
        }
    }
}