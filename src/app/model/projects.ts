export interface Assignee {
  id: number;
  name: string;
  avatar: string;
}

export interface Project {
  id: number;
  name: string;
  status: 'Completed' | 'In Progress' | 'On Hold';
  assignees: Assignee[];
}
