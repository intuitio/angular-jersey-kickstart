package intuitio.kickstart.jersey.service;

import intuitio.kickstart.jersey.domain.Task;
import intuitio.kickstart.jersey.repository.TaskRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {

    @Resource
    private TaskRepository taskRepository;

    public List<Task> getAll() {
//        return Arrays.asList(
//                new Task(1L, "Implement jersey spring kickstart"),
//                new Task(2L, "Test the implementation")
//        );
        return taskRepository.findAll();
    }
}