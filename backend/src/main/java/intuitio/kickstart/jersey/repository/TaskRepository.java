package intuitio.kickstart.jersey.repository;

import intuitio.kickstart.jersey.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
