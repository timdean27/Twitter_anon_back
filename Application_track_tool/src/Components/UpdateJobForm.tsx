import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Switch, FormControlLabel, Divider } from '@mui/material';

// Define props interface with type definitions
interface UpdateJobFormProps {
  job: any;
  onUpdate: (updatedJob: any) => Promise<void>;
  onCancel: () => void; // Define onCancel prop
}

// Define functional component
const UpdateJobForm: React.FC<UpdateJobFormProps> = ({ job, onUpdate, }) => {
  // State hook for storing updated job data
  const [updatedJob, setUpdatedJob] = useState(job);

  // Event handler for text field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setUpdatedJob({ ...updatedJob, [field]: e.target.value });
  };

  // Event handler for switch change
  const handleDeclinedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedJob({ ...updatedJob, declined: e.target.checked });
  };

  // Event handler for form submission
  const handleSubmit = () => {
    onUpdate(updatedJob);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Update Job
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Job Title"
          placeholder={job.job}
          value = {updatedJob.job}
          onChange={(e) => handleChange(e, 'job')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Description"
          placeholder={job.description}
          value = {updatedJob.description}
          onChange={(e) => handleChange(e, 'description')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Company"
          placeholder={job.company}
          value = {updatedJob.company}
          onChange={(e) => handleChange(e, 'company')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
   
        <FormControlLabel
          control={
            <Switch
              checked={updatedJob.declined || false}
              onChange={handleDeclinedChange}
              color="primary"
            />
          }
          label="Declined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Job Posting Link"
          placeholder={job.jobPostingLink}
          value = {updatedJob.jobPostingLink}
          onChange={(e) => handleChange(e, 'jobPostingLink')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Resume"
          placeholder={job.resume}
          value = {updatedJob.resume}
          onChange={(e) => handleChange(e, 'resume')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Cover Letter"
          placeholder={job.coverLetter}
          value = {updatedJob.coverLetter}
          onChange={(e) => handleChange(e, 'coverLetter')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Screening Interview"
          placeholder={job.screeningInterview}
          value = {updatedJob.screeningInterview}
          onChange={(e) => handleChange(e, 'screeningInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date of Screening Interview"
          type="date"
          
          value = {updatedJob.dateOfScreeningInterview ? updatedJob.dateOfScreeningInterview :"mm/dd/yyyy" }
          onChange={(e) => handleChange(e, 'dateOfScreeningInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Coding Interview"
          placeholder={job.codingInterview}
          value = {updatedJob.codingInterview}
          onChange={(e) => handleChange(e, 'codingInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date of Coding Interview"
          type="date"
          value = {updatedJob.dateOfCodingInterview ? updatedJob.dateOfCodingInterview :"mm/dd/yyyy" }
          onChange={(e) => handleChange(e, 'dateOfCodingInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Behavior Interview"
          placeholder={job.behaviorInterview}
          value = {updatedJob.behaviorInterview}
          onChange={(e) => handleChange(e, 'behaviorInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date of Behavior Interview"
          type="date" 
          value = {updatedJob.dateOfBehaviorInterview ? updatedJob.dateOfBehaviorInterview :"mm/dd/yyyy" }
          onChange={(e) => handleChange(e, 'dateOfBehaviorInterview')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date Applied"
          type="date"
          placeholder={job.dateApplied}
          value = {updatedJob.dateApplied ? updatedJob.dateApplied :"mm/dd/yyyy" }
          onChange={(e) => handleChange(e, 'dateApplied')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Follow-up for Information"
          placeholder={job.followupForInformation}
          value = {updatedJob.followupForInformation}
          onChange={(e) => handleChange(e, 'followupForInformation')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Advice Received"
          placeholder={job.adviceReceived}
          value = {updatedJob.adviceReceived}
          onChange={(e) => handleChange(e, 'adviceReceived')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date Followed Up"
          type="date"
          placeholder={job.dateFollowedUp}
          value = {updatedJob.dateFollowedUp ? updatedJob.dateFollowedUp :"mm/dd/yyyy" }
          onChange={(e) => handleChange(e, 'dateFollowedUp')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update Job
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateJobForm 
