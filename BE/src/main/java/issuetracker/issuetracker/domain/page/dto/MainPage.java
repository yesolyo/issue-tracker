package issuetracker.issuetracker.domain.page.dto;

import issuetracker.issuetracker.domain.issue.Issue;

import java.util.List;

public class MainPage {

    private List<Issue> issueList;

    private Long labelCount;
    private Long milestoneCount;
    private Long openCount;
    private Long closeCount;


    public MainPage(List<Issue> issueList, Long labelCount, Long milestoneCount, Long openCount, Long closeCount) {
        this.issueList = issueList;
        this.labelCount = labelCount;
        this.milestoneCount = milestoneCount;
        this.openCount = openCount;
        this.closeCount = closeCount;
    }

    public List<Issue> getIssueList() {
        return issueList;
    }

    public void setIssueList(List<Issue> issueList) {
        this.issueList = issueList;
    }

    public Long getLabelCount() {
        return labelCount;
    }

    public void setLabelCount(Long labelCount) {
        this.labelCount = labelCount;
    }

    public Long getMilestoneCount() {
        return milestoneCount;
    }

    public void setMilestoneCount(Long milestoneCount) {
        this.milestoneCount = milestoneCount;
    }

    public Long getOpenCount() {
        return openCount;
    }

    public void setOpenCount(Long openCount) {
        this.openCount = openCount;
    }

    public Long getCloseCount() {
        return closeCount;
    }

    public void setCloseCount(Long closeCount) {
        this.closeCount = closeCount;
    }
}
