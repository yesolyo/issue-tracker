package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.issue.dto.MilestoneResponse;
import nonapi.io.github.classgraph.json.Id;

import java.time.LocalDateTime;
import java.util.List;

public class Issue {
    @Id
    private Long issue_id;
    private String title;
    private User author;
    // TODO assignee
    private List<Assignee> assignee;
    private List<LabelRef> label;
    private MilestoneResponse milestone;
    private LocalDateTime dateTime;
    private boolean isOpen;

    public Issue(Long issue_id, String title, User author, List<Assignee> assignee, List<LabelRef> label, MilestoneResponse milestone, LocalDateTime dateTime, boolean isOpen) {
        this.issue_id = issue_id;
        this.title = title;
        this.author = author;
        this.assignee = assignee;
        this.label = label;
        this.milestone = milestone;
        this.dateTime = dateTime;
        this.isOpen = isOpen;
    }

    public Long getIssue_id() {
        return issue_id;
    }

    public String getTitle() {
        return title;
    }

    public User getAuthor() {
        return author;
    }

    public List<Assignee> getAssignee() {
        return assignee;
    }

    public List<LabelRef> getLabel() {
        return label;
    }

    public MilestoneResponse getMilestone() {
        return milestone;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public boolean isOpen() {
        return isOpen;
    }
}
