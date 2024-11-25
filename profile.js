
    function openModal() {
      document.getElementById("profileModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("profileModal").style.display = "none";
    }

    // Close modal when clicking outside the dialog
    window.onclick = function(event) {
      const modal = document.getElementById("profileModal");
      if (event.target === modal) {
        closeModal();
      }
    }
  