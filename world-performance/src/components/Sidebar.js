// Sidebar.js
import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckIcon from '@mui/icons-material/Check';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <Drawer variant="permanent"  >
      <List style={{ marginTop: '70px' }}>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Workspace" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Shift Planning" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Call History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="My Jobs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="My Achievements" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Job Offers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ThumbUpIcon />
          </ListItemIcon>
          <ListItemText primary="Finance" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Recommendations" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Quality Checks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Training" />
        </ListItem>
      </List>
      </Drawer>

  );
};

export default Sidebar;
