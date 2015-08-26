package intuitio.kickstart.jersey.api;

import intuitio.kickstart.jersey.domain.Task;
import intuitio.kickstart.jersey.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Path("/tasks")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Component
public class TasksResource {
    
    @Autowired
    private TaskService taskService;
    
    @GET
    public List<Task> getAllTasks() {
        return taskService.getAll();
    }

    @POST
    public Response createTask(Task task) throws URISyntaxException {
        return Response.created(new URI("/api/tasks" + 1)).build();
    }

    @PUT @Path("/{id}")
    public Response updateTask(@PathParam("id") String id, Task task) {
        return Response.ok().build();
    }

    @DELETE @Path("/{id}")
    public Response deleteTask(@PathParam("id") String id) {
        return Response.ok().build();
    }
}