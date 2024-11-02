import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule], // Certifique-se de que o CommonModule está importado
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'] // Correção: styleUrls em vez de styleUrl
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}
