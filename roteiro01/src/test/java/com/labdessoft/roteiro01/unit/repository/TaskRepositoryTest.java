package com.labdessoft.roteiro01.unit.repository;

import com.labdessoft.roteiro01.entity.Task;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import com.labdessoft.roteiro01.repository.TaskRepository;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class TaskRepositoryTest {

    @Autowired
    private TaskRepository taskRepository;

    @Test
    public void testSaveAndFindById() {
        Task task = new Task();
        task.setDescription("Test Task");

        Task savedTask = taskRepository.save(task);
        Optional<Task> retrievedTask = taskRepository.findById(savedTask.getId());

        assertTrue(retrievedTask.isPresent());
        assertEquals("Test Task", retrievedTask.get().getDescription());
    }

    @Test
    public void testDeleteById() {
        Task task = new Task();
        task.setDescription("Test Task");

        Task savedTask = taskRepository.save(task);
        taskRepository.deleteById(savedTask.getId());

        Optional<Task> retrievedTask = taskRepository.findById(savedTask.getId());
        assertTrue(retrievedTask.isEmpty());
    }
}
