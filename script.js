/* --- NEW FEATURE STYLES --- */

/* Header & Filters */
.header-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 10px;
}

header p {
  margin-bottom: 0; /* Removing old margin */
}

.filters {
  display: flex;
  gap: 8px;
}

.filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.filter-btn.active {
  background: rgba(255, 255, 255, 0.4);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.8);
}

/* Clear Completed Button */
#clear-completed-btn {
  background: rgba(255, 107, 107, 0.15);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
  font-weight: 600;
}

#clear-completed-btn:hover {
  background: rgba(255, 107, 107, 0.4);
  color: #fff;
}

.hidden {
  display: none !important;
}
