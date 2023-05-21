package issuetracker.issuetracker.domain.page.dto.request;

public class MainPageRequest {
    private boolean isOpen;
    private String assignee;
    private String label;
    private String milestone;
    private String author;

    public MainPageRequest(boolean isOpen, String assignee, String label, String milestone, String author) {
        this.isOpen = isOpen;
        this.assignee = assignee;
        this.label = label;
        this.milestone = milestone;
        this.author = author;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getMilestone() {
        return milestone;
    }

    public void setMilestone(String milestone) {
        this.milestone = milestone;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}