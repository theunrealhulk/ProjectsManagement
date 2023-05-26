using System.Text.Json.Serialization;

namespace ProjectsManager.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Status
    {
        todo,
        in_progress,
        on_hold,
        done
    }
}
